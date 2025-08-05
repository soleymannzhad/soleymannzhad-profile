export default function Categories({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div className='h-[500px] '>
      <h1>Categories</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
