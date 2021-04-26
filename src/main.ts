import { BaseAPI } from "./base";
import { PostsApi, VotesApi } from "./index";
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
  constructor(options: { basePath: string }) {
    super();
    this.basePath = options.basePath;
  }

  public uploadOneMedia(
    file?: any,
    entityType?: string,
    entityId?: string,
    options?: any
  ) {
    return axios.default.post(`${this.basePath}/media`, {});
  }
}

export default { PostsApi, VotesApi, MediaApi };
