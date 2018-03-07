import { Get } from '@/api/axios.config'

export function AjaxDb () {
  let result = Get('/api/db')
  return result
}
