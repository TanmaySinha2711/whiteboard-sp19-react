import React from 'react'
import HeadingWidget from "./heading-widget";
import ParaWidget from "./para-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget"
import LinkWidget from "./link-widget"

export default class WidgetList
  extends React.Component {
  render() {
    return(
      <div>
      <HeadingWidget/>
      <ParaWidget/>
      <ListWidget/>
      <ImageWidget/>
      <LinkWidget/>
      </div>
    );
  }}
