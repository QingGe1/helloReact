import { useContext } from "react"
import { RouterContext } from "./RouterContext"

export const useHistory = () => useContext(RouterContext).history
export const useRouteMatch = () => useContext(RouterContext).match
export const useLocation = () => useContext(RouterContext).location
export const useParams = () => {
  const match = useContext(RouterContext).match
  return match ? match.params : {}
}
