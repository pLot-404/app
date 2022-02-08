const MultiEventListener = (
  element: Element | null | Window,
  eventNames: string,
  listener: (e: Event) => void
): void => {
  /*
  elementに、半角スペースで区切られたeventNamesそれぞれに対し同じイベントリスナを登録する
  */

  const target = element as EventTarget;
  const events = eventNames.split(" ");
  events.forEach((event: string) =>
    target.addEventListener(event, listener, false)
  );
};

export default MultiEventListener;
