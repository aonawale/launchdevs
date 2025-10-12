// Analytics utility types and functions

export interface AnalyticsEvent {
  event_category?: string;
  event_label?: string;
  value?: number;
  button_location?: string;
  button_action?: string;
}

export interface Analytics {
  track: (eventName: string, properties?: AnalyticsEvent) => void;
  trackClick: (buttonLabel: string) => void;
  trackFormSubmit: () => void;
  trackConversion: (label: string) => void;
}

// Google Analytics types
export interface GtagEvent {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface DataLayerObject {
  event: string;
  [key: string]: string | number | boolean | object | undefined;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, eventNameOrConfig: string, params?: GtagEvent) => void;
    dataLayer?: DataLayerObject[];
    analytics?: Analytics;
    trackCTAClick?: (buttonLabel: string) => void;
    trackFormSubmission?: () => boolean;
  }
}

/**
 * Track a custom analytics event
 */
export function trackEvent(eventName: string, properties: AnalyticsEvent = {}): void {
  const event = {
    event_category: 'engagement',
    value: 1,
    ...properties
  };

  if (typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, event);
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  } else if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: eventName,
      ...event
    });
  }
}

/**
 * Track a CTA button click
 */
export function trackCTAClick(buttonLabel: string): void {
  trackEvent('cta_click', {
    event_label: buttonLabel,
    button_location: buttonLabel.split('_')[0], // hero, header, etc.
    button_action: buttonLabel.split('_').slice(1).join('_') // start_journey, join_now, etc.
  });
}

/**
 * Track a form submission
 */
export function trackFormSubmit(): void {
  trackEvent('form_submit', {
    event_label: 'mentorship_signup'
  });
}

/**
 * Track a conversion event
 */
export function trackConversion(label: string): void {
  trackEvent('conversion', {
    event_category: 'conversion',
    event_label: label
  });
}

/**
 * Initialize analytics utilities on the window object
 */
export function initAnalytics(): void {
  window.analytics = {
    track: trackEvent,
    trackClick: trackCTAClick,
    trackFormSubmit,
    trackConversion
  };

  // Backwards compatibility
  window.trackCTAClick = trackCTAClick;
}

