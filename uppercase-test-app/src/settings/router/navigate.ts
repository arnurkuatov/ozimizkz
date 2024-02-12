import type { Router } from '@remix-run/router'

let navigate: Router['navigate']

const setNavigate = (nav: Router['navigate']) => {
  navigate = nav
}

export { navigate, setNavigate }
