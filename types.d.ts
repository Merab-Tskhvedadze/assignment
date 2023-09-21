type Blog = {
  id: number;
  attributes: {
    Title: string;
    Category: string;
    Summary: string;
    isFeatured: boolean;
    Content: string;
    publishedAt: string;
    username: string;
    Thumbnail: {
      data: {
        attributes: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          url: string;
        };
      };
    };
    Featuredimage: {
      data: {
        hash: string;
        ext: string;
        mime: string;
        url: string;
        provider_metadata: null;
      };
    };
  };
};

type Data = {
  data: Blog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
