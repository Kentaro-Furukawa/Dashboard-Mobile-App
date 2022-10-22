import { Button } from '@nativescript/core'
import { HomeViewModel } from './home-view-model'

export function onTap(args) {
    const button = args.object as Button
    // execute your custom logic here...
    console.log("tap edit")
  }