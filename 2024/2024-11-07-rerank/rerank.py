import pandas as pd
from sentence_transformers import SentenceTransformer, util
import torch

def rerank_by_similarity(df, query, model_name='sentence-transformers/all-MiniLM-L6-v2'):
    # Load the model
    model = SentenceTransformer(model_name)
    
    # Combine title and subtitle, replacing NaN with empty string
    combined_text = df.apply(lambda x: f"{x['title']} {x['subtitle']}".strip(), axis=1).fillna('').tolist()
    
    # Encode the query and combined text
    query_embedding = model.encode(query, convert_to_tensor=True)
    text_embeddings = model.encode(combined_text, convert_to_tensor=True)
    
    # Calculate cosine similarities
    similarities = util.pytorch_cos_sim(query_embedding, text_embeddings)[0]
    
    # Add similarities as a new column
    df['similarity_score'] = similarities.cpu().numpy()
    
    # Sort by similarity score in descending order
    df_ranked = df.sort_values('similarity_score', ascending=False)
    
    return df_ranked

def main():
    # Read the CSV file
    df = pd.read_csv('results.csv')
    
    # Rerank based on similarity to "math"
    df_ranked = rerank_by_similarity(df, "math")
    
    # Save the reranked results
    df_ranked.to_csv('reranked_results.csv', index=False)
    
    # Print top 10 results
    print("\nTop 10 results by semantic similarity to 'math':")
    for _, row in df_ranked.head(10).iterrows():
        print(f"\nTitle: {row['title']}")
        print(f"Subtitle: {row['subtitle']}")
        print(f"Similarity Score: {row['similarity_score']:.4f}")

if __name__ == "__main__":
    main()
