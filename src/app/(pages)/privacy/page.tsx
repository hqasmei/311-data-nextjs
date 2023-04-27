import React from "react";
import ReactMarkdown from "react-markdown";
import SectionHeader from "@/app/components/sectionHeader";

const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}`;
const query = `
  query {
      privacyPolicy(id: "2HBnjUBMJ7KNimZGjhAsEi") {
      body
    }
  }
`;

async function getData() {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CONTENTFUL_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PrivacyPage = async () => {
  const data = await getData();
  const { body } = data.data.privacyPolicy;

  return (
    <main className="mx-auto flex w-full flex-1 flex-col">
      <SectionHeader title="Privacy Policy" />
      {data && <ReactMarkdown className="prose">{body}</ReactMarkdown>}
    </main>
  );
};

export default PrivacyPage;
