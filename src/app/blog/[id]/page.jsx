import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
// import { notFound } from 'next/navigation';

// async function getData(id) {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
//     cache: 'no-store',
//   });

//   if (!res.ok) {
//     return notFound();
//   }

//   return res.json();
// }

// export async function generateMetadata({ params }) {
//   const post = await getData(params.id);
//   return {
//     title: post.title,
//     description: post.desc,
//   };
// }

const BlogPost = ({ params }) => {
  // const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {/* {data.title} */}
            Test blog post title
          </h1>
          <p className={styles.desc}>
            {/* {data.desc} */}
            Test blog post paragraph
          </p>
          <div className={styles.author}>
            <Image
              // src={data.img}
              src="/2.png"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>
              {/* {data.username} */}
              Test
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            // src={data.img}
            src="/hero2.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {/* {data.content} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          quibusdam quia necessitatibus velit? Dolorem vero sint velit excepturi
          eius suscipit praesentium laborum nostrum consequuntur, doloribus
          perferendis qui placeat, quos minima. Consequatur mollitia asperiores
          assumenda atque, voluptates, recusandae nihil maiores dolore impedit
          fugiat optio dignissimos nemo dolores ullam tenetur totam qui dolorum
          repellat enim facilis architecto. Rem dolorum reiciendis sint
          nesciunt. Unde modi aliquam exercitationem pariatur ducimus. A
          repellat veritatis quidem? Iste, odio minima? Sed, quia temporibus
          quis voluptates laboriosam vitae minima nesciunt illo, molestias non
          enim vel maxime quidem culpa!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
