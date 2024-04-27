import { Table } from "antd";
import { useEffect, useState } from "react";

function TableData() {
  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/posts?skip=0&limit=150')
      .then((res) => res.json())
      .then((res2) => {
        setData(res2.posts.map((post, index) => ({ ...post, key: index })));
      });
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',

    },
    {
      title: 'Title',
      dataIndex: 'title',

    },
    {
      title: 'Content',
      dataIndex: 'body',

    },

  ];

  const filterData = data && data.filter(item =>
    item.body.includes(searchInput) &&
    (!tagInput || item.tags.includes(tagInput))
  );

  return (
    <>
      <div className='flex flex-row h-8 m-2'>
        <input
          type="text"
          placeholder='search by body...'
          className='p-2 border-2 border-indigo-800 placeholder:text-white text-lime-400 bg-slate-800 rounded-lg h-full max-w-40 active:border-none ml-2'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <input
          type="text"
          placeholder='filter by tag...'
          className='p-2 border-2 border-indigo-800 placeholder:text-white text-lime-400 bg-slate-800 rounded-lg h-full max-w-40 active:border-none ml-2 '
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
        />

      </div>

      {data && (
        <Table dataSource={filterData} columns={columns} />
      )}
    </>
  );
}

export default TableData;
