const fetcher = async <T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  const response = await fetch(input, init)

  if (response.status === 204) {
    return JSON.parse("{}")
  }

  return (await response.json()) as T
}

export default fetcher
