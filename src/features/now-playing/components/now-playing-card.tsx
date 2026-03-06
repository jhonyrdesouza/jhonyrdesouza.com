"use client"

import { ChevronDownIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Spotify } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { cn, trim } from "@/lib/utils"

import type { NowPlaying } from "../types"
import Equalizer from "./equalizer"

const NowPlayingCard = ({
  track,
  onOpenSongUrl,
  isExpanded = false,
}: {
  track?: NowPlaying
  onOpenSongUrl?: (url?: string) => void
  isExpanded?: boolean
}) => {
  const [expanded, setExpanded] = useState(isExpanded)

  if (!track?.songUrl) return null

  const trimmedSongTitle = trim(track.title, 40)
  const trimmedSongArtist = trim(track.artist)

  return (
    <div
      className={cn(
        "fixed bottom-0 z-[999] w-full",
        !expanded && "flex justify-end"
      )}
    >
      {expanded ? (
        <div className="via-primary flex items-center justify-between rounded-t-lg bg-gradient-to-r from-purple-400 to-indigo-400 p-2">
          <div className="flex items-center gap-3">
            {track.albumImageUrl && (
              <Image
                src={track.albumImageUrl}
                alt={track.album as string}
                width={60}
                height={60}
                unoptimized
                className="rounded-md"
              />
            )}
            <button
              className="font-cal flex flex-col text-left text-white hover:cursor-pointer hover:underline bg-transparent border-none p-0"
              onClick={() => onOpenSongUrl?.(track.songUrl)}
              type="button"
            >
              <div className="text-sm font-medium">{trimmedSongTitle}</div>
              <div className="flex items-center gap-2 text-xs">
                <Equalizer />
                <span className="pt-1 text-sm">{trimmedSongArtist}</span>
              </div>
            </button>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="bg-transparent text-white"
            onClick={() => setExpanded((prev) => !prev)}
          >
            <ChevronDownIcon />
          </Button>
        </div>
      ) : (
        <Button
          className="text-spotify hover:text-spotify cursor-pointer rounded-full bg-transparent transition-all duration-200 hover:bg-transparent"
          onClick={() => setExpanded((prev) => !prev)}
          size="icon"
          variant="ghost"
        >
          <Spotify className="animate-pulse" />
        </Button>
      )}
    </div>
  )
}

export default NowPlayingCard
