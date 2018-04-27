/*!
 * Mux
 * Copyright(c) 2018 Mux Inc.
 */

const Video = require('./video/video');

/**
 * Mux Class - Provides access to the Mux Video and Mux Data API
 *
 * @type {Video}
 * @property {Video} Mux.Video provides access to the Mux Video API
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Video } = muxClient;
 *
 * // Create an asset
 * Video.assets.create({input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'});
 *
 * // Create a playback Id for an asset
 * Video.playbackIds.create('assetId', { policy: 'public' });
 */
class Mux {
  constructor(accessToken, secret) {
    if (typeof accessToken === 'undefined') {
      throw new Error('API Access Token must be provided.');
    }

    if (typeof secret === 'undefined') {
      throw new Error('API secret key must be provided');
    }

    /** @type {Video} */
    this.Video = new Video(accessToken, secret);
  }
}

module.exports = Mux;
