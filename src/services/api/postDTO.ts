/**
 * Generated by orval v6.12.0 🍺
 * Do not edit manually.
 * GimmeVibe API
 * For using awesome someapp
 * OpenAPI spec version: v0.0.1
 */
import type { PostCommentDTO } from './postCommentDTO';

export interface PostDTO {
    uuid: string;
    createdDate?: string;
    post: string;
    userUuid: string;
    postComments?: PostCommentDTO[];
    postLikerIds?: string[];
}
