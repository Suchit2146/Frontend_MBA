import { TOKEN } from "./constants"
const isUserLoggedIn = () => {
    const token = localStorage.getItem(TOKEN)
    return token !== undefined;
}
export default isUserLoggedIn;