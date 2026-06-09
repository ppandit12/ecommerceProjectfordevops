output "vpc_id" {
  description = "The ID of the VPC"
  value       = aws_vpc.main.id
}

output "eks_cluster_name" {
  description = "The name of the EKS Cluster"
  value       = aws_eks_cluster.cluster.name
}

output "eks_cluster_endpoint" {
  description = "The endpoint for the EKS Cluster API server"
  value       = aws_eks_cluster.cluster.endpoint
}

output "eks_cluster_security_group_id" {
  description = "Security group ID attached to the EKS cluster"
  value       = aws_eks_cluster.cluster.vpc_config[0].cluster_security_group_id
}

output "configure_kubeconfig" {
  description = "Run this command to update kubeconfig and gain access to the cluster"
  value       = "aws eks update-kubeconfig --region ${var.aws_region} --name ${aws_eks_cluster.cluster.name}"
}
