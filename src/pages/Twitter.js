import React from 'react'

import {Timeline} from 'react-twitter-widgets'

export const Twitter = () => {
  return (
    <Timeline
        dataSource={{
            sourceType: "timeline",
            screenName: "korikizokuz"
        }}
        options={{
            height: "330"
        }}
    />
  )
}
