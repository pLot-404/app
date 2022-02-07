const MultiEventListener = (
  element: Element | null | Window,
  eventNames: string,
  listener: (e: Event) => void,
): void => {
  const target = element as EventTarget;
  const events = eventNames.split(' ');
  events.forEach((event: string) => target.addEventListener(event, listener, false));
};

export default MultiEventListener;
