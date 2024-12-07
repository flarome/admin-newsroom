
import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
  Button,
  InlineStack,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import Parser from "rss-parser";

// Loader pour récupérer les données RSS

export const loader = async ({ request }) => {
  const parser = new Parser();
  let feedItems = [];

  try {
    const feed = await parser.parseURL("https://newsroom.flarome.com/rss-feed.rss");
    feedItems = feed.items;
  } catch (err) {
    console.error("Erreur lors de la récupération du flux RSS", err);
  }

  return json({ feedItems });
};

export default function RssFeedPage() {
  const { feedItems } = useLoaderData();

  return (

<div className="rss-feed-container">





<Page

        title="Flux RSS de Flarome Newsroom"
  
        compactTitle
        primaryAction={[
          {
            content: "Afficher",   
            url: "https://newsroom.flarome.com/rss-feed.rss"
          },
        ]}
      >
        <Layout>
          <Layout.Section>
         
         <InlineStack
        wrap
        direction={{xl: 'row'}}
         >
          {feedItems.map((item, index) => (
             <Card>
          <div key={index} className="rss-feed-item">
            <h2 className="rss-feed-title">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </h2>
            <p className="rss-feed-description">{item.contentSnippet}</p>
            <p className="rss-feed-date">{new Date(item.pubDate).toLocaleDateString()}</p>
          </div>
          </Card>
        ))}
</InlineStack>

            </Layout.Section>

            </Layout>

            </Page>





    </div>
  );
}



