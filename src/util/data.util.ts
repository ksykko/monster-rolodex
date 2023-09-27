// Type T is a generic type that will be defined when the function is called
export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  return await response.json()
}
