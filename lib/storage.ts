import Cookies from "js-cookie";
export const cookieName = "USER_SESSION";

export function saveSession(token: string) {
  Cookies.set(cookieName, token, {
    expires: 1, // 1 day
    httpOnly: true,
    secure: false
  });
}

export function getSession() {
  const session = Cookies.get(cookieName);
  return session;
}

export function removeSession() {
  Cookies.remove(cookieName);
}
