provider "aws" {

region = "ca-central-1"

}

resource "aws_instance" "devops_server" {

ami = "ami-0eacb8127f9b58e90"

instance_type = "t3.micro"

key_name = "enterprise-key"

tags = {

Name = "enterprise-devops"

}

}