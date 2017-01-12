import { User } from './';

export class Repo {
  id: number;
  name: string;
  full_name: string;
  owner: User;
  private: boolean;
  html_url: string;
  description: string;
  fork: false;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: true;
  has_downloads: true;
  has_wiki: true;
  has_pages: false;
  mirror_url: null;
  open_issues_count: number;
  forks: number;
  forks_count: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  score: number;
}
