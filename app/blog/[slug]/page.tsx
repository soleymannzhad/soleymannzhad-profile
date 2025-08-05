type CategoriesProps = {
  params: {
    slug: string;
  };
};

export default function Categories({ params }: CategoriesProps) {
  const { slug } = params;

  return (
    <div className="h-[500px]">
      <h1>Categories</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
