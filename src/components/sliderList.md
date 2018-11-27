# Github Logo

----
## Props

* **fetching**             Boolean
* **error**                Boolean
* **onItemClick**          Function
* **loadMore**          Function
* **repositories**         Array


----
## Usage

```html
<SliderList
  fetching={false}
  error={false}
  onItemClick={() => null}
  loadMore={() => null}
  pagination={{
    endCursor:   'xxx',
    hasNextPage: true,
  }}
  repositories={[
        {
       name: 'react',
       stars: 116391,
       to: '/react',
       watchers: 6592
     },
     {
       name: 'react-native',
       stars: 71324,
       to: '/react-native',
       watchers: 3729
     },
     {
       name: 'create-react-app',
       stars: 59759,
       to: '/create-react-app',
       watchers: 1766
     },
    ]}
/>
```
