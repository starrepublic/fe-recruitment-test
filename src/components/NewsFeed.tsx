type Props = {
  show: boolean;
  setShowNewsFeed: (show: boolean) => void;
};

const NewsFeed = ({ show, setShowNewsFeed }: Props) => {
  const feed = [
    {
      title: { rendered: "Title" },
      link: "https://www.google.com",
      date: "2020-01-01",
    },
  ];

  if (!show) {
    return (
      <div style={{ marginTop: 24 }}>
        <h2>News feed</h2>
        <button onClick={() => setShowNewsFeed(true)}>Show news feed</button>
      </div>
    );
  }

  return (
    <>
      <h2>News feed</h2>

      <table style={{ marginTop: 24 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {feed.map((item, idx) => (
            <tr key={`feed-${idx}`}>
              <td>
                <a style={{ textDecoration: "none" }} href={item.link}>
                  {item.title.rendered}
                </a>
              </td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default NewsFeed;
