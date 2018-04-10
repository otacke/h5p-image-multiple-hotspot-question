var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.ImageMultipleHotspotQuestion'] = (function ($) {
  return {
    1: {
      1: function (parameters, finished, extras) {
        var extrasOut = extras || {};

        // Copy title to new metadata structure if present
        if (parameters.imageMultipleHotspotQuestion && parameters.imageMultipleHotspotQuestion.backgroundImageSettings) {
          var title = parameters.imageMultipleHotspotQuestion.backgroundImageSettings.questionTitle || ((extras && extras.metadata) ? extras.metadata.title : undefined);

          extrasOut.metadata = {
            title: title
          };

          // Remove old parameter
          delete parameters.imageMultipleHotspotQuestion.backgroundImageSettings.questionTitle;

          // Move image data out of array -- H5P semantics peculiarity
          parameters.imageMultipleHotspotQuestion.backgroundImageSettings = parameters.imageMultipleHotspotQuestion.backgroundImageSettings.backgroundImage;
        }

        finished(null, parameters, extrasOut);
      }
    }
  };
})(H5P.jQuery);
