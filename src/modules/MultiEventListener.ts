const MultiEventListener = (
  element: Element | null,
  eventNames: string,
  listener: listener
): void => {
  const target = element as EventTarget;
  const events = eventNames.split(" ");
  events.forEach((event: string) =>
    target.addEventListener(event, listener, false)
  );
};

export default MultiEventListener;
