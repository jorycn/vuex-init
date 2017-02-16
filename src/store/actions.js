import {
  SIGNIN
} from './mutation-types'

export const signin = ({commit}, data) => {
  commit(SIGNIN, data)
}
