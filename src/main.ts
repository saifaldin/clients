import { BaseAPI } from "./base";
import * as API from "./index";
import * as axios from "axios";
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
  constructor(basePath: string) {
    super();
    basePath = basePath;
  }

  public uploadOneMedia(
    file?: any,
    entityType?: string,
    entityId?: string,
    options?: any
  ) {
    return axios.default.post(`${this.basePath}/media`, {});
    // return MediaApiFp(this.configuration)
    //   .uploadOneMedia()
    //   .then((request) => request(this.axios, this.basePath));
  }
}

export default { ...API, MediaApi };
