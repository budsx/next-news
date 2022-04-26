import Thumbnail from './Thumbnail';

function Results({ results }) {
  return (
    <div className=''>
      {results.map((data) => (
        // <p key={data.id}>{data.title}</p>
        <Thumbnail key={data.id} data={data} />
        //  <button><a href={data.url} >Baca Selengkapnya</a></button>
      ))}
    </div>
  );
}

export default Results;
