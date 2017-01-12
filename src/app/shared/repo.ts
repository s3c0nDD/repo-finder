import { User } from './';

export class Repo {
  name: string;
  full_name: string;
  owner: User;
  html_url: string;
  description: string;
  url: string;
  homepage: string;
  created_at: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  open_issues_count: number;
  forks_count: number;
  open_issues: number;
}
