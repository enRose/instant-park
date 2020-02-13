import React from 'react';
import { Button } from 'antd';

export default function Header(props) {
  return (
    <header {...props}>
      <a
        className="logo-wrapper"
        href="https://antv.alipay.com/zh-cn/index.html"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="logo" />
        <span>InstantP</span>
      </a>
      <div className="button">
        <Button>Call a bot</Button>
      </div>
    </header>
  );
}
