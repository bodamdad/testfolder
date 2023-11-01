"use client"
import { useEffect } from 'react';

export default function CodeHighlighter() {
  useEffect(() => {
    document.querySelectorAll('code').forEach(element => {
      let html = element.innerHTML;
      html = html.replace(/\b(let|function|return|import|from|export|default)\b/g, '<span class="purple">$1</span>');
      html = html.replace(/\b(string|number|className|href|style|src|alt|console)\b/g, '<span class="yellow">$1</span>');
      html = html.replace(/\b(div)\b/g, '<span class="red">$1</span>');
      html = html.replace(/(\[.*?\])/g, '<span class="green">$1</span>');
      element.innerHTML = html;
    });
  }, []);

  return null;
}
