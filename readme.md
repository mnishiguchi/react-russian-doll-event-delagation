# React russian doll event delegation

In this repo, I will prove that a single event listener that is set on a container
component can be used for listening nested children's events.

## Demo app

```
npm intall
npm start
```

## Event delegation with React

- We can put an onClick handler on any DOM element and it will detect all the
click events on the children nodes.
- So if we need to target specific events, we may want to put a switch statement with target ids.

```
<section
  className="RussianDoll"
  onClick={e => this._handleAllEvents(e)}
  onDoubleClick={e => this._handleAllEvents(e)}
  onMouseOver={e => this._handleAllEvents(e)}
  onMouseLeave={e => this._handleAllEvents(e)}
>
  <B1>
    <B2>
      <section className="bottom">
        This is the bottom.
      </section>
    </B2>
  </B1>
</section>
```

```
_handleAllEvents = (event) => {
  const eventType   = event.type
  const targetId    = event.target.id
  const targetClass = event.target.classList[0]

  // ...

}
```

```
function handleAllClickEvents(event) {
  const target   = event.relatedTarget;
  const targetId = target.id;
  switch(targetId) {
    case 'my-button-1':
      // handle my-button-1 click event
    case 'my-button-2':
      // handle my-button-2 click event
  }
}
```

## Resources

* [React: event bubbling through nested components](http://stackoverflow.com/a/32562118/3837223)
* [https://facebook.github.io/react/docs/events.html#mouse-events](https://facebook.github.io/react/docs/events.html#mouse-events)
