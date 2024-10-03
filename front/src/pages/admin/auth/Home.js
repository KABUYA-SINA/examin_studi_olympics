import React from 'react';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.main
            className='home-container'
            initial={{ translateY: 50, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{
                duration: .3, ease: "easeInOut", translateY: {
                    type: "spring",
                    damping: 5,
                    stiffness: 50,
                    restSpeed: 0.5,
                    restDelta: 0.001
                }
            }
            }
        >
            <h2>Bienvenue  sur le site Olympics</h2>
            <br />
            <h3>Vous etes connecté étant que ADM </h3>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo neque ut tenetur sunt assumenda, saepe sapiente inventore facilis non,
                adipisci, deserunt distinctio accusamus pariatur ea voluptates animi voluptas necessitatibus? Adipisci nulla exercitationem nam fugit vitae
                perspiciatis! Quis dolor adipisci consequatur fugit tempora ducimus optio placeat fuga tenetur error blanditiis ipsam modi, quod obcaecati.
                Placeat aliquid iste officia delectus eveniet suscipit consequatur, inventore laboriosam quis necessitatibus exercitationem incidunt eligendi
                sed, adipisci iusto vel possimus libero. Ipsam voluptates, eum temporibus officiis reiciendis illum. Consectetur obcaecati nam enim beatae cum
                alias in neque ex, doloribus, ab eum modi eos id error odit sit! Voluptatum molestiae praesentium atque amet dolor illo nobis alias officiis
                excepturi id, ipsam numquam iste repellat nulla debitis fuga ratione dignissimos sunt vitae asperiores neque nesciunt perspiciatis? Aliquam
                labore repellat pariatur veritatis ipsum ipsa ipsam quo quia repudiandae vel temporibus ex voluptatem iste suscipit similique ut, nam obcaecati
                nobis cum unde qui. Quasi eos debitis nostrum non? Modi veritatis fugiat, tenetur laborum ratione alias numquam quidem commodi delectus quasi
                id voluptatem impedit enim accusamus at corrupti repellendus aperiam atque dolores ducimus nisi.
                Labore qui perspiciatis distinctio quaerat numquam veritatis iste ipsam optio, deleniti, ad eligendi voluptas quae perferendis, veniam autem.
            </p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo neque ut tenetur sunt assumenda, saepe sapiente inventore facilis non,
                adipisci, deserunt distinctio accusamus pariatur ea voluptates animi voluptas necessitatibus? Adipisci nulla exercitationem nam fugit vitae
                perspiciatis! Quis dolor adipisci consequatur fugit tempora ducimus optio placeat fuga tenetur error blanditiis ipsam modi, quod obcaecati.
                Placeat aliquid iste officia delectus eveniet suscipit consequatur, inventore laboriosam quis necessitatibus exercitationem incidunt eligendi
                sed, adipisci iusto vel possimus libero. Ipsam voluptates, eum temporibus officiis reiciendis illum. Consectetur obcaecati nam enim beatae
                cum alias in neque ex, doloribus, ab eum modi eos id error odit sit! Voluptatum molestiae praesentium atque amet dolor illo nobis alias
                officiis excepturi id, ipsam numquam iste repellat nulla debitis fuga ratione dignissimos sunt vitae asperiores neque nesciunt perspiciatis?
                Aliquam labore repellat pariatur veritatis ipsum ipsa ipsam quo quia repudiandae vel temporibus ex voluptatem iste suscipit similique ut,
                nam obcaecati nobis cum unde qui. Quasi eos debitis nostrum non? Modi veritatis fugiat, tenetur laborum ratione alias numquam quidem commodi
                delectus quasi id voluptatem impedit enim accusamus at corrupti repellendus aperiam atque dolores ducimus nisi.
                Labore qui perspiciatis distinctio quaerat numquam veritatis iste ipsam optio, deleniti, ad eligendi voluptas quae perferendis, veniam autem.
            </p>
        </motion.main>
    );
};

export default Home;