import * as Sequelize from 'sequelize'

import { VideoRateType } from '../../../shared/models/user-video-rate.model'

export namespace UserVideoRateMethods {
  export type LoadCallback = (err: Error, userVideoRateInstance: UserVideoRateInstance) => void
  export type Load = (userId: number, videoId: string, transaction: Sequelize.Transaction, callback: LoadCallback) => void
}

export interface UserVideoRateClass {
  load: UserVideoRateMethods.Load
}

export interface UserVideoRateAttributes {
  type: VideoRateType
}

export interface UserVideoRateInstance extends UserVideoRateClass, UserVideoRateAttributes, Sequelize.Instance<UserVideoRateAttributes> {
  id: number
  createdAt: Date
  updatedAt: Date
}

export interface UserVideoRateModel extends UserVideoRateClass, Sequelize.Model<UserVideoRateInstance, UserVideoRateAttributes> {}
