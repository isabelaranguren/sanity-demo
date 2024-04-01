import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'dtdf5xta',
    dataset: 'production',
    apiVersion: "2024-01-01",
})