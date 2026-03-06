import { getDevices } from "@/features/now-playing/server/actions"
import type { Device } from "@/features/now-playing/types"
import { response } from "@/lib/server"

import type { APIErrorResponse, APIListResponse } from "@/types/api"

export const GET = async () => {
  try {
    const devices = await getDevices()

    return response<APIListResponse<Device>>({ data: devices })
  } catch (error) {
    return response<APIErrorResponse>({
      message: error instanceof Error ? error.message : "Internal Server Error",
    })
  }
}
