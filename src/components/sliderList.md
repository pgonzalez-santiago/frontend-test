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
  repositories={[]}
/>
```
