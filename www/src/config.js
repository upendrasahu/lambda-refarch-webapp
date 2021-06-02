// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "dusl61vs6k35avqjpgl7qldig",     // CognitoClientID
  "api_base_url": "https://0enxlncoq4.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-upen-lambda-refarch-webapp.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d13a6jy4ymr2vi.amplifyapp.com"                                      // AmplifyURL
};

export default config;
