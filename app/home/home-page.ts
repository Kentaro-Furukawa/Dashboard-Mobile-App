import { Button } from '@nativescript/core'
import { HomeViewModel } from './home-view-model'

export function onTapEdit(args) {
    const button = args.object as Button
    // execute your custom logic here...
    console.log("tap edit")
  }
  
export function onTapAdd(args) {
    const button = args.object as Button
    // execute your custom logic here...
    console.log("tap add")
  }
