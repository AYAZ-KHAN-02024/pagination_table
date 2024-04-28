# TableData Component (https://ayaz-pagination-table.netlify.app/)

This React component (`TableData`) fetches data from a dummy API and displays it in an Ant Design table. It allows users to search and filter the data based on the content and tags.

## Dependencies

- `antd`: The Table component is imported from the Ant Design library.
- `react`: The `useEffect` and `useState` hooks are used from the React library.


## Functionality

- The component fetches data upon mounting using the `useEffect` hook.
- It maintains state for data fetched, search input, and tag input using the `useState` hook.
- Data is displayed in a table format using Ant Design's Table component.
- Filtering is performed based on the content and tags of the data.
- Data is filtered in real-time as users type in the search and tag input fields.


