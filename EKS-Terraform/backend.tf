# --- Terraform Remote Backend Configuration ---
# Note: Terraform does not allow variables in the backend block.
# Please replace the placeholders below with your actual AWS S3 bucket name and DynamoDB table name.
# Ensure that the S3 bucket and DynamoDB table are created in your AWS account before running the workflow.

terraform {
  backend "s3" {
    bucket         = "YOUR_AWS_S3_BUCKET_NAME"       # Replace with your S3 Bucket Name
    key            = "eks/terraform.tfstate"         # Location of state file inside the bucket
    region         = "us-east-1"                     # Region where the S3 bucket is located
    dynamodb_table = "YOUR_AWS_DYNAMODB_TABLE_NAME"  # Replace with your DynamoDB Table Name for state locking
    encrypt        = true                            # Encrypt the state file at rest
  }
}
