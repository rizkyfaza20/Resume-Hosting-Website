// The perfMetrics object is created by the code that goes in <head>.
perfMetrics.onFirstInputDelay(function(delay, evt) {
    ga('send', 'event', {
      eventCategory: 'Perf Metrics',
      eventAction: 'first-input-delay',
      eventLabel: evt.type,
      // Event values must be an integer.
      eventValue: Math.round(delay),
      // Exclude this event from bounce rate calculations.
      nonInteraction: true,
    });
  });