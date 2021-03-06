import React from "react"
import { formatDate, timeSince } from "@fider/services"

interface MomentText {
  date: Date | string
  format?: "relative" | "full" | "short"
}

export const Moment = (props: MomentText) => {
  if (!props.date) {
    return <span />
  }

  const format = props.format || "relative"

  const now = new Date()
  const date = props.date instanceof Date ? props.date : new Date(props.date)
  const diff = (now.getTime() - date.getTime()) / (60 * 60 * 24 * 1000)
  const display =
    diff >= 365 && format === "relative" ? formatDate(props.date, "short") : format === "relative" ? timeSince(now, date) : formatDate(props.date, format)

  return (
    <span className="date" data-tooltip={formatDate(props.date, "full")}>
      {display}
    </span>
  )
}
