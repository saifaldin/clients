import { BaseAPI } from "./base";
import { MediaApiFp } from "./index";
import * as API from "./index";

export class MediaApi extends BaseAPI {
  /**
   *
   * @summary Add the media data related to a post
   * @param {any} [file]
   * @param {string} [entityType]
   * @param {string} [entityId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MediaApi
   */
  public uploadOneMedia(
    file?: any,
    entityType?: string,
    entityId?: string,
    options?: any
  ) {
    return MediaApiFp(this.configuration)
      .uploadOneMedia()
      .then((request) => request(this.axios, this.basePath));
  }
}

export default { ...API, MediaApi };
