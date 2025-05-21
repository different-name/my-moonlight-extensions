{
  description = "My Moonlight Extensions";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = inputs:
    inputs.flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import inputs.nixpkgs {inherit system;};

      nodejs = pkgs.nodejs_22;
      pnpm = pkgs.pnpm.override {nodejs = nodejs;};
    in {
      # $ nix develop
      devShells.default = pkgs.mkShell {
        buildInputs = [nodejs pnpm];
      };

      # $ nix run .#dev
      apps.dev = {
        type = "app";
        program = pkgs.lib.getExe (pkgs.writeShellApplication {
          name = "my-moonlight-extensions-dev";
          runtimeInputs = [nodejs pnpm];

          text = ''
            if [ ! -d node_modules ]; then
              pnpm install
            fi
            pnpm run dev
          '';
        });
      };
    });
}
